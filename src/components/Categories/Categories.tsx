import { getCategories } from '@/server/actions';

export async function Categories() {
  const categories = await getCategories();
  return (
    <section>
      <div className="container">
        {categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    </section>
  );
}
