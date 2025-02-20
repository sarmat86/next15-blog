export default function PostLoading() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-start lg:items-center py-[60px] justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-48 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      <div className="flex flex-col gap-8 max-w-[920px]">
        <div className="w-24 h-6 bg-gray-200 rounded animate-pulse" />

        <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse" />

        <div className="w-32 h-5 bg-gray-200 rounded animate-pulse" />

        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-11/12" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-10/12" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-9/12" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-11/12" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-10/12" />
        </div>

        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-11/12" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5" />
        </div>
      </div>
    </div>
  );
}
