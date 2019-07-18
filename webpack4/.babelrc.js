{
  presets:[
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "37",
          safari: "11.1",
          ie:"9"
        },
        useBuiltIns: "usage",
      },
    ],
  ];
}
  