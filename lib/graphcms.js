async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  // console.log(res.body)
  const json = await res.json();

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID);
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllCategories(locale = "en") {
  const data = await fetchAPI(
    `
    query getWorksCategories($locale: Locale!){
        worksCategories(locales:[$locale]){
            id
            title
            featuredImage(locales:[en]){
                id
                url
                width
                height
            }
        }
    }
`,
    {
      variables: {
        locale,
      },
    }
  );

  return data.worksCategories;
}

export async function getWorksByCategoryId(categoryId) {
  const data = fetchAPI(
    `
  {
    query {
      works(where:{worksCategory:{id:$categoryId}}){
        id
        title
        worksCategory{
          id
          title
        }
      }
    }
  }
`,
    {
      categoryId,
    }
  );

  return data.works;
}

export async function getCategoryById(id) {
  const data = await fetchAPI(
    `
  query CategoryById ($id: ID!){
    worksCategory (where: {id: $id}) {
    id
    title
    description
    featuredImage {
      id
      url
      width
      height
    }
    works {
      id
      title
      width
      height
      image {
        id
        url
        width
        height
      }
    }
  }
}
`,
    { variables: { id } }
  );
  return data.worksCategory;
}

export async function getAllWorks() {
  const data = await fetchAPI(`
      query {
        works {
          id
          title
          width
          height
          image { 
            id
            url
            height
            width
          }
          worksCategory {
            id
          }
      }
    }
  `);

  return data.works;
}

export async function getWorkById(id, preview) {
  const data = await fetchAPI(
    `
    query Work($id: ID!, $stage: Stage!){
      work(stage: $stage, where: {id: $id}){
        id
        title
        description
        height
        width
        image {
          id
          url
          height
          width
        }
      }
    }
  `,
    {
      preview,
      variables: {
        stage: preview ? "DRAFT" : "PUBLISHED",
        id,
      },
    }
  );
  return data.work;
}

export async function getAllProductions() {
  const data = await fetchAPI(
    `
      query getAllProductions  {
        productions {
          id
          title
          projectType
          slug
        }
      }
    `
  );

  return data.productions;
}

export async function getAllProductionsByType(
  type,
  locales = "en",
  preview = false
) {
  // , where: {projectType: [$type]}
  //, $type: ProjectType!
  const data = await fetchAPI(
    `
  query getAllProjects ($locales: Locale!, $stage: Stage!) {
    productions(locales: [$locales],stage: $stage){
      id
      title
      slug
      description
      excerpt
      rol
      projectType
      featuredImage (locales:[en,de]){
        id
        url
        height
        width
      }
      dateFrom
      dateTo
    }
  }
`,
    {
      preview,
      variables: {
        stage: preview ? "DRAFT" : "PUBLISHED",
        type,
        locales,
      },
    }
  );
  return data.productions.filter( x=> x.projectType.includes(type));
}

export async function getProductionById(id, locale = "en", preview = false) {
  const data = await fetchAPI(
    `query getProductionById($locale: Locale!, $id: ID!, $stage: Stage!){
        production(locales: [$locale], stage: $stage, where:{id:$id}){
          id
          title
          slug
          projectType
          description
          rol
          featuredImage {
            id
            url
            height
            width
          }
          dateFrom
          dateTo
          gallery(locales:[en,de]) {
            id
            url
            height
            width
          }
          instagram
          facebook
          twitter
          address 
          host
          pressLinks
          youtubeLinks
        }
    }`,
    {
      preview,
      variables: {
        stage: preview ? "DRAFT" : "PUBLISHED",
        id,
        locale,
      },
    }
  );
  return data.production;
}

export async function getProductionBySlug(
  slug,
  locale = "en",
  preview = false
) {
  const data = await fetchAPI(
    `query getProductionBySlug($locale: Locale!, $slug: String!, $stage: Stage!){
        productions(locales: [$locale], stage: $stage, where:{slug:$slug}){
          id
          title
          slug
          projectType
          description
          rol
          featuredImage(locales:[en]) {
            id
            url
            height
            width
          }
          dateFrom
          dateTo
          gallery(locales:[en,de]) {
            id
            url
            height
            width
          }
          instagram
          facebook
          twitter
          address 
          host
          pressLinks
          youtubeLinks
        }
    }`,
    {
      preview,
      variables: {
        stage: preview ? "DRAFT" : "PUBLISHED",
        slug,
        locale,
      },
    }
  );
  return data.productions[0];
}

export async function getRecentProjects(locale = "en") {
  const data = await fetchAPI(
    `
    query getRecentProjects($locale: Locale!)
      {
        productions(orderBy: dateFrom_DESC, first: 4, locales:[$locale]){
          id
          title
          slug
          excerpt
          featuredImage(locales: [en, de]){
            id
            url
            width
            height
          }
        }
      }
    `,
    {
      variables: {
        locale,
      },
    }
  );

  return data.productions;
}
