export default function guardrail(mathFunction) {
  let queue = [];
  let val;
  try {
    val = mathFunction();
  } catch (error) {
    val = "Error: " + error.message;
  } finally {
    queue.push(val, "Guardrail was processed");
  }

  return queue;
}
