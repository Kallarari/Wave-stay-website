import { Icon } from "@/components/icon";
import { whatsappLink } from "@/lib/constants";

type WhatsappButtonProps = {
  label: string;
  message?: string;
  className?: string;
  icon?: string;
};

export function WhatsappButton({
  label,
  message,
  className = "",
  icon = "chat",
}: WhatsappButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Icon name={icon} className="text-[20px]" />
      <span>{label}</span>
    </a>
  );
}
