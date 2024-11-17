export const moduleNameMapper = {
    "^@/(.*)$": "<rootDir>/src/$1"
};
export const transform = {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
};
  