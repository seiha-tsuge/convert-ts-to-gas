const greeting = () => {
  Logger.log('Hello World');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).greeting = greeting;
