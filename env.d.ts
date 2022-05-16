/// <reference types="vite/client" />

declare module "jest-serializer-vue-tjw" {
  const plugin: {
    print: (
      val: unknown,
      print: (arg0: unknown) => string,
      indent: (arg0: string) => string,
      options: {
        edgeSpacing: string;
        min: boolean;
        spacing: string;
      },
      colors: unknown
    ) => string;
    test: (arg0: unknown) => boolean;
  };
  export default plugin;
}
