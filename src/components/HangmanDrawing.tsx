const HEAD = (
  <div
    style={{
      height: "50px",
      width: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "50px",
    }}
    data-testid="hman-head"
    key={"head"}
  />
);

const BODY = (
  <div
    style={{
      height: "100px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "80px",
    }}
    data-testid="hman-body"
    key={"body"}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-20px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
    data-testid="hman-right-arm"
    key={"right arm"}
  />
);

const LEFT_ARM = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "90px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
    data-testid="hman-left-arm"
    key={"left arm"}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-10px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
    data-testid="hman-right-leg"
    key={"right leg"}
  />
);

const LEFT_LEG = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "80px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
    data-testid="hman-left-leg"
    key={"left leg"}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  const lineColor = "#03001C";
  return (
    <div style={{ position: "relative" }} data-testid={"hangman-drawing"}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          backgroundColor: lineColor,
          position: "absolute",
          top: 0,
          right: 80,
        }}
        data-testid="stand-hook"
      />
      {/* top horizontal */}
      <div
        style={{
          height: "10px",
          width: "150px",
          background: lineColor,
          marginLeft: "10px",
        }}
        data-testid="stand-top-piece"
      />
      {/* vertical pole */}
      <div
        style={{
          height: "400px",
          width: "10px",
          background: lineColor,
          marginLeft: "20px",
        }}
        data-testid="stand-pole"
      />
      {/* bottom horizontal*/}
      <div
        style={{ height: "10px", width: "250px", background: lineColor }}
        data-testid="stand-base"
      />
    </div>
  );
}
