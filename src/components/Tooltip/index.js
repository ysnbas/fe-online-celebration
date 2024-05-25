import { usePopperTooltip } from "react-popper-tooltip";

import "react-popper-tooltip/dist/styles.css";

const Tooltip = ({ tip, span, children, isHidden, place, maxWidth, width }) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    placement: place || "bottom",
    closeOnTriggerHidden: true,
    delayHide: 70,
    zIndex: 9999,
  });

  const toolTipStyle = {
    zIndex: 9999,
    opacity: "1",
    borderRadius: "5px",
    fontSize: ".775rem",
    padding: "0.53rem",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.18)",
    maxWidth: maxWidth || "200px",
    position: "absolute",
    width: width || "auto",
  };

  return (
    <>
      {span ? (
        <span ref={setTriggerRef}>{children}</span>
      ) : (
        <div ref={setTriggerRef}>{children}</div>
      )}
      {visible && !isHidden && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className: "tooltip-container",
            style: toolTipStyle,
          })}
        >
          {tip}
          <div
            {...getArrowProps({
              className: "tooltip-arrow",
              "data-popper-arrow": true,
            })}
          />
        </div>
      )}
    </>
  );
};

export default Tooltip;
