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
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  const lineColor: string = "#03001C";
  return (
    <div style={{ position: "relative" }}>
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
      />
      {/* top horizontal */}
      <div
        style={{
          height: "10px",
          width: "150px",
          background: lineColor,
          marginLeft: "10px",
        }}
      />
      {/* vertical pole */}
      <div
        style={{
          height: "400px",
          width: "10px",
          background: lineColor,
          marginLeft: "20px",
        }}
      />
      {/* bottom horizontal*/}
      <div style={{ height: "10px", width: "250px", background: lineColor }} />
    </div>
  );
}
