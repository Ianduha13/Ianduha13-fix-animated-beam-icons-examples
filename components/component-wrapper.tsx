import { cn } from "@/lib/utils";

interface ComponentWrapperProps {
  className?: string;
  children: any;
}
const ComponentWrapper = ({ className, children }: ComponentWrapperProps) => {
  return (
    <div
      className={cn(
        "not-prose relative flex max-w-[65ch] flex-col items-center justify-center rounded-xl border p-8 backdrop-blur-xl md:p-20",
        className,
      )}
    >
      {children}

      <div
        className={cn(
          `absolute inset-0 -z-10 h-full w-full [background-size:16px_16px]`,
          `bg-[radial-gradient(#00000055_1px,transparent_1px)] [--mask-offset:60px] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]`,
          `[WebkitMask:mask:linear-gradient(to_bottom,transparent,#fff_var(--mask-offset)_calc(100%-var(--mask-offset)),transparent),linear-gradient(to_right,transparent,#fff_var(--mask-offset)_calc(100%-var(--mask-offset)),transparent)] [mask:linear-gradient(to_bottom,transparent,#fff_var(--mask-offset)_calc(100%-var(--mask-offset)),transparent),linear-gradient(to_right,transparent,#fff_var(--mask-offset)_calc(100%-var(--mask-offset)),transparent)]`,
          `[--webkit-mask-composite:source-in,xor] [mask-composite:intersect]`,
        )}
      />
    </div>
  );
};

export default ComponentWrapper;
