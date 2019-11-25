const delay = async (millis: number): Promise<void> => new Promise(resolve => {
  return setTimeout(() => {
    return resolve()
  }, millis)
});

export {
  delay
}
