import Container from '@mui/material/Container'

import RecentProjects from "@/components/widgets/recent-projects";
import { getRecentProjects } from "@/lib/graphcms";
import { Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';

export default function Home(props) {
  const {t} = useTranslation('common')
  return (
    <Container>
      <Typography variant="h5" component="h2">
        {t("recent_projects")}
      </Typography>
      <RecentProjects projects={props.recentProjects} />
    </Container>
  );
}

export async function getStaticProps(ctx){
const recentProjects = await getRecentProjects(ctx.locale)
  return {
    props: {
      recentProjects
    }
  }
}