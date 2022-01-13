import HomeCategoriesItem from "./home-categories-item";

export default function HomeCategories({ items }) {
    return (
        <div className='grid grid-flow-col grid-cols-3 gap-4'>
            {items.map(item => (
                <div key={item.id}>
                    <HomeCategoriesItem item={item} />
                </div>
            ))}
        </div>
    )
}