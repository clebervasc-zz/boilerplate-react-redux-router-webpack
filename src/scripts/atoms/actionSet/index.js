export function actionSet (type, payload) {
  return payload ? { type, payload } : { type }
}