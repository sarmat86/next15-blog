import { getCategories } from '@/server/actions';
import { CategoryTile } from './CategoryTile';

export async function Categories() {
  const categories = await getCategories();

  return (
    <section className="py-12 bg-[#F4F4F4]">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Kategorie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((category) => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
