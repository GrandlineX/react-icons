export type IconProps = {
  width?: number;
  height?: number;
  size?: number;
  stroke?: string;
  fill?: string;
};

export function getIconProps(props: IconProps) {
  const { size } = props;
  let { width, height, fill, stroke } = props;
  if (size !== undefined) {
    width = size;
    height = size;
  }
  if (width === undefined && height === undefined) {
    width = 16;
    height = 16;
  }
  if (fill === undefined) {
    fill = 'currentColor';
  }
  if (stroke === undefined) {
    stroke = 'currentColor';
  }
  return { width, height, fill, stroke };
}
