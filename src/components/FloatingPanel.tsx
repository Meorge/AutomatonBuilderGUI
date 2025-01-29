interface FloatingPanelProps {
  heightPolicy: string;
  style?: React.CSSProperties;
}

/**
 * Provides a simple panel that floats over the automaton canvas and blurs
 * elements behind it. Currently used for the side panel, action stack panel,
 * and toolbox.
 * @param {React.ReactNode} props
 * @param {string} props.heightPolicy The height policy to use for this box. Internally, this string is appended to the `h-*` classes in Tailwind CSS,
 * so you can find valid values here: https://tailwindcss.com/docs/height
 * For example, setting `heightPolicy` to `"1/2"` would result in the panel using the height class `h-1/2`.
 * @param {React.CSSProperties} [props.style] Additional styles to append to this panel.
 * @param {React.ReactNode | undefined} props.children The content to place in this panel.
 */
export default function FloatingPanel(
  props: React.PropsWithChildren<FloatingPanelProps>,
) {
  return (
    <div className="flex flex-col">
      <div
        className={`z-10 bg-gray-300/50 dark:bg-gray-300/50 dark:text-white w-fit h-${props.heightPolicy} p-2 m-5 rounded-lg backdrop-blur-xl shadow-xl overflow-y-auto`}
        style={props.style}
      >
        {props.children}
      </div>
    </div>
  );
}
