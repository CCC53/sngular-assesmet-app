
export const Loader = () => {
  return (
    <div data-testid="loader-container" className="flex justify-center items-center mt-20">
      <div data-testid="loader-spinner" className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}
