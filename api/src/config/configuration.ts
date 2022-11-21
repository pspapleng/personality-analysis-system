export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
});

export interface IConfiguration {
  port: number;
}
