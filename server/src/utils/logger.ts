import dayjs from "dayjs";
import pino from "pino";
import PinoPretty from "pino-pretty";
const logger = pino(
  {
    base: {
      pid: false,
    },
    timestamp: () => `, "time": "${dayjs().format()}"`,
  },
  PinoPretty({
    colorize: true,
  })
);

export default logger;
