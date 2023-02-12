import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

type ButtonProps = {
  onClick: () => void;
};

export function RestartGameButton({ onClick }: ButtonProps) {
  return (
    <div>
      <button
        style={{
          position: "fixed",
          top: "50px",
          right: "10%",
          width: "max(5vw, 50px)",
          height: "max(5vw, 50px)",
          borderRadius: "25px",
          alignItems: "center",
          background: "rgba(214,214,214,0.3)",
          cursor: "pointer",
        }}
        onClick={() => onClick()}
        data-testid={"restart-game-button"}
      >
        <FontAwesomeIcon
          icon={faRotate}
          style={{ width: "max(4vw, 35px)", height: "max(4vw, 35px)" }}
          color={"rgba(25,25,25,1)"}
        />
      </button>
    </div>
  );
}
