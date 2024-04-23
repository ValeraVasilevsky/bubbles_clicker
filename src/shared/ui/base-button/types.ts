export type BaseButtonTypes = "primary" | "accent";
export interface BaseButtonProps {
  type?: BaseButtonTypes;
  disabled?: boolean;
  loading?: boolean;
}
