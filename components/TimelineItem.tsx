interface TimelineItemProps {
  company: string;
  location: string;
  role: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({
  company,
  location,
  role,
  description,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 pb-10 last:pb-0">
      {/* Vertical line + dot */}
      <div className="flex flex-col items-center">
        <div className="h-3 w-3 shrink-0 rounded-full border-2 border-gold bg-white" />
        {!isLast && (
          <div className="w-px flex-1 bg-navy-100" />
        )}
      </div>

      {/* Content */}
      <div className="-mt-0.5 pb-2">
        <h3 className="font-semibold text-navy">{company}</h3>
        <p className="text-sm text-gold-dark">
          {role} &mdash; {location}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}
