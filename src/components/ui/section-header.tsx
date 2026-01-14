import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeaderProps) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("max-w-3xl mb-12 md:mb-16", alignClasses[align], className)}
    >
      {subtitle && (
        <span className="inline-block font-subtitle text-sm md:text-base font-medium text-wave uppercase tracking-wider mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="font-title text-foreground mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-base md:text-lg font-body max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;