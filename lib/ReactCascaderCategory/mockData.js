const categoryTreeDataMock = [
  {
    key: 10,
    value: 10,
    title: "美食美食美食",
    children: [
      {
        key: 132,
        value: 132,
        title: "咖啡厅卡布奇诺",
        children: [],
      },
      {
        key: 113,
        value: 113,
        title: "日本料理",
        children: [
          {
            key: 2821,
            value: 2821,
            title: "日式火锅",
            children: null,
          },
        ],
      },
      {
        key: 219,
        value: 219,
        title: "test",
        children: null,
      },
    ],
  },
  {
    key: 21,
    value: 21,
    title: "test2",
  },
  {
    key: 50,
    value: 50,
    title: "丽人",
    children: [
      {
        key: 157,
        value: 157,
        title: "美发",
        children: [],
      },
      {
        key: 34199,
        value: 34199,
        title: "植发",
        children: null,
      },
      {
        key: 183,
        value: 183,
        title: "医学美容",
        children: [
          {
            key: 34199,
            value: 34199,
            title: "植发",
            children: null,
          },
        ],
      },
    ],
  },
  {
    key: 20,
    value: 20,
    title: "购物",
  },
];

const shopInfoMock = [
  {
    address: "建军路中茵海华广场乐天玛特往左昭千拉面和珍奶会所中间", // 地址
    avgPrice: 15, // 人均价格
    backendCat0Id: 0, // 后台一级行业
    backendCat1Id: 0, // 后台二级行业
    backendCat2Id: 0, // 后台三级行业
    backendCat3Id: 0, // 后台四级行业
    branch_name: "中茵海华店", // 分店
    cat0Id: 10, // 前台一级行业ID
    cat1Id: 132, // 前台二级行业ID
    cat2Id: 0, // 前台三级行业ID
    cityId: 0, // 城市
    crossRoad: "", //
    investType: 0,
    region: "中茵海华广场", // 商圈
    serviceIds: null,
    shopFullAddress: "建军路中茵海华广场乐天玛特往左昭千拉面和珍奶会所中间", // address(crossRoad)
    shopFullName: "桥头排骨(中茵海华店)", // shopname(branch_name)
    shopId: 20882606,
    shopName: "桥头排骨", // 商户名称
    star: 50, // 星级
  },
  {
    address: "建军路中茵海华广场乐天玛特往左昭千拉面和珍奶会所中间", // 地址
    avgPrice: 15, // 人均价格
    backendCat0Id: 0, // 后台一级行业
    backendCat1Id: 0, // 后台二级行业
    backendCat2Id: 0, // 后台三级行业
    backendCat3Id: 0, // 后台四级行业
    branch_name: "中茵海华店", // 分店
    cat0Id: 50, // 前台一级行业ID
    cat1Id: 183, // 前台二级行业ID
    cat2Id: 34199, // 前台三级行业ID
    cityId: 97, // 城市
    crossRoad: "", //
    investType: 0,
    region: "中茵海华广场", // 商圈
    serviceIds: null,
    shopFullAddress: "建军路中茵海华广场乐天玛特往左昭千拉面和珍奶会所中间", // address(crossRoad)
    shopFullName: "桥头排骨(中茵海华店)", // shopname(branch_name)
    shopId: 20882607,
    shopName: "桥头排骨测试", // 商户名称
    star: 50, // 星级
  },
];

export { categoryTreeDataMock, shopInfoMock };
