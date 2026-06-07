// 省/市/县 三级联动 Mock 数据
export type City = { code: string; name: string };
export type County = { code: string; name: string };
export type Province = { code: string; name: string; cities: (City & { counties: County[] })[] };

export const REGIONS: Province[] = [
  {
    code: "43", name: "湖南省",
    cities: [
      { code: "4301", name: "长沙市", counties: [
        { code: "430102", name: "芙蓉区" }, { code: "430103", name: "天心区" },
        { code: "430104", name: "岳麓区" }, { code: "430105", name: "开福区" },
        { code: "430111", name: "雨花区" }, { code: "430112", name: "望城区" }
      ]},
      { code: "4310", name: "郴州市", counties: [
        { code: "431002", name: "北湖区" }, { code: "431003", name: "苏仙区" },
        { code: "431021", name: "桂阳县" }, { code: "431022", name: "宜章县" },
        { code: "431023", name: "永兴县" }, { code: "431024", name: "嘉禾县" },
        { code: "431025", name: "临武县" }, { code: "431026", name: "汝城县" },
        { code: "431027", name: "桂东县" }, { code: "431028", name: "安仁县" },
        { code: "431081", name: "资兴市" }
      ]},
      { code: "4306", name: "岳阳市", counties: [
        { code: "430602", name: "岳阳楼区" }, { code: "430603", name: "云溪区" },
        { code: "430611", name: "君山区" }, { code: "430621", name: "岳阳县" }
      ]}
    ]
  },
  {
    code: "44", name: "广东省",
    cities: [
      { code: "4401", name: "广州市", counties: [
        { code: "440103", name: "荔湾区" }, { code: "440104", name: "越秀区" },
        { code: "440105", name: "海珠区" }, { code: "440106", name: "天河区" },
        { code: "440111", name: "白云区" }, { code: "440112", name: "黄埔区" }
      ]},
      { code: "4403", name: "深圳市", counties: [
        { code: "440303", name: "罗湖区" }, { code: "440304", name: "福田区" },
        { code: "440305", name: "南山区" }, { code: "440306", name: "宝安区" },
        { code: "440307", name: "龙岗区" }
      ]},
      { code: "4419", name: "东莞市", counties: [
        { code: "441900", name: "东莞市(全市)" }
      ]}
    ]
  },
  {
    code: "36", name: "江西省",
    cities: [
      { code: "3601", name: "南昌市", counties: [
        { code: "360102", name: "东湖区" }, { code: "360103", name: "西湖区" },
        { code: "360104", name: "青云谱区" }, { code: "360111", name: "青山湖区" }
      ]},
      { code: "3607", name: "赣州市", counties: [
        { code: "360702", name: "章贡区" }, { code: "360703", name: "南康区" },
        { code: "360721", name: "赣县区" }, { code: "360722", name: "信丰县" }
      ]}
    ]
  },
  {
    code: "51", name: "四川省",
    cities: [
      { code: "5101", name: "成都市", counties: [
        { code: "510104", name: "锦江区" }, { code: "510105", name: "青羊区" },
        { code: "510106", name: "金牛区" }, { code: "510107", name: "武侯区" },
        { code: "510108", name: "成华区" }
      ]},
      { code: "5105", name: "泸州市", counties: [
        { code: "510502", name: "江阳区" }, { code: "510503", name: "纳溪区" }
      ]}
    ]
  },
  {
    code: "11", name: "北京市",
    cities: [
      { code: "1101", name: "北京市", counties: [
        { code: "110101", name: "东城区" }, { code: "110102", name: "西城区" },
        { code: "110105", name: "朝阳区" }, { code: "110106", name: "丰台区" },
        { code: "110107", name: "石景山区" }, { code: "110108", name: "海淀区" }
      ]}
    ]
  },
  {
    code: "31", name: "上海市",
    cities: [
      { code: "3101", name: "上海市", counties: [
        { code: "310101", name: "黄浦区" }, { code: "310104", name: "徐汇区" },
        { code: "310105", name: "长宁区" }, { code: "310106", name: "静安区" },
        { code: "310107", name: "普陀区" }
      ]}
    ]
  }
];

export function findCity(p: string, c: string) {
  const province = REGIONS.find(r => r.code === p || r.name === p);
  return province?.cities.find(x => x.code === c || x.name === c);
}
