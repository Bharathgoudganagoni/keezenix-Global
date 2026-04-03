const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-sm text-muted-foreground">
          Loading...
        </p>

      </div>
    </div>
  );
};

export default Loader;