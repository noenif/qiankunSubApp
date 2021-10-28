let validatePass = (rule, value, callback) => {
  const length = value.replace(/[\u4e00-\u9fa5]/g, '000').length;
  console.log(length);
  if (length > 15) {
    console.log("a");
    callback(new Error("标签名称不能超过五个中文字符"));
  } else {
    callback();
  }
};


export const rules = {
  labelName: [
    { required: true, message: '请输入标签名称', trigger: 'blur' },
    { validator: validatePass, trigger: 'change' }
  ]
};
// 数据源校验规则
export const dataSourcerule = {
  name: [
    { required: true, message: "请输入数据源名称", trigger: "blur" }
  ],
  type: [
    { required: true, message: "请选择数据源类型", trigger: "change" }
  ],
  requestMethod: [
    { required: true, message: "请选择请求方式", trigger: "blur" }
  ],
  requestUrl: [
    { required: true, message: "请输入请求地址", trigger: "blur" },
    {
      pattern: "^([hH][tT]{2}[pP]://|[hH][tT]{2}[pP][sS]://)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\\/])+$",
      message: "url格式不正确",
    }
  ],
  authType: [
    { required: true, }
  ]
};

// 数据源管理安全认证校验规则
export const securityAutheRule = {
  appKey: [
    {
      required: true, message: "请输入AK", trigger: "blur"
    }
  ],
  secretKey: [
    {
      required: true, message: "请输入SK", trigger: "blur"
    }
  ],
  akPosition: [
    {
      required: true, message: "请选择AK位置", trigger: "blur"
    }
  ],
  akFiled: [
    {
      required: true, message: "请输入AK属性名称", trigger: "blur"
    }
  ],
  signedPosition: [
    {
      required: true, message: "请选择签名位置", trigger: "blur"
    }
  ],
  signedFiled: [
    {
      required: true, message: "请输入签名属性名称", trigger: "blur"
    }
  ],
  waitSignAlgorithm: [
    {
      required: true, message: "请选择待签字符串算法", trigger: "blur"
    }
  ],
  waitSignLowercase: [
    {
      required: true,
    }
  ],
  waitSignHex: [
    {
      required: true, message: "请选择待签字符串进制", trigger: "blur"
    }
  ],
  signAlgorithm: [
    {
      required: true, message: "请选择签名算法", trigger: "blur"
    }
  ],
  signHex: [
    {
      required: true, message: "请选择签名进制", trigger: "blur"
    }
  ]
}

// import { integrateApi } from "@/api/integrateTask.js";

// let handleIntegrateName = (rule, value, callback) => {
//   integrateApi
//     .checkIntegrateName(value)
//     .then((res) => {
//       if (!res.success) {
//         callback(new Error("任务名称不能重复"));
//       } else {
//         console.log("dfgsad");
//       }
//     });
// };

// 集成任务（基础信息）校验规则
export const integrateTaskRule = {
  name: [
    { required: true, message: "请输入任务名称", trigger: "blur" },
    // { validator: handleIntegrateName, trigger: 'change' }
  ],
  tagList: [
    { required: true, message: "请选择任务标签", trigger: "blur" }
  ]
}

// 集成任务（任务计划）校验规则
export const taskPlanRule = {
  syncPeriod: [
    {
      required: true,
    }
  ],
  syncInterval: [
    {
      required: true, message: "请选择间隔时间", trigger: "blur"
    }
  ],
  startTime: [
    {
      required: true, message: "请选择开始时间", trigger: "blur"
    }
  ],
  second: [
    {
      required: true, message: "此项为必填", trigger: "blur",
    },
  ]
}

// 集成任务（配置数据源信息）校验规则
export const dataSourceInfoRule = {
  dataSourceType: [
    {
      required: true, message: "请输入数据源类型", trigger: "blur"
    }
  ],
  datasourceId: [
    {
      required: true, message: "请选择数据源名称", trigger: "blur"
    }
  ],
  requestMethod: [
    {
      required: true, message: "请选择一种合适的请求方式", trigger: "blur"
    }
  ],
  requestUrl: [
    {
      required: true, message: "请输入请求地址", trigger: "blur"
    }
  ],
  isPage: [
    {
      required: true,
    }
  ],
  isIncrement: [
    {
      required: true,
    }
  ],
  requestParams: [
    {
      required: true,
    }
  ],
  type: [
    {
      required: true, message: "请选择一种响应类型", trigger: "blur"
    }
  ],
  rootFiled: [
    {
      required: true, message: "请输入数据根字段", trigger: "blur"
    }
  ],
  parseRoute: [
    {
      required: true,
    }
  ]
}

// 是否分页校验规则
export const pagenationRule = {
  pageFiled: [
    {
      required: true, message: "请输入字段名称", trigger: "blur"
    }
  ],
  sizeFiled: [
    {
      required: true, message: "请输入字段名称", trigger: "blur"
    }
  ],
  endFiled: [
    {
      required: true, message: "请输入分页结束字段路径", trigger: "blur"
    }
  ]
}

// 是否增量迁移
export const incrementRule = {
  startFiled: [
    {
      required: true, message: "请输入开始时间字段", trigger: "blur"
    }
  ],
  endFiled: [
    {
      required: true, message: "请输入结束时间字段", trigger: "blur"
    }
  ],
  timeZone: [
    {
      required: true, message: "请选择时区", trigger: "blur"
    }
  ],
  initTimestamp: [
    {
      required: true, message: "请输入时间戳初始值", trigger: "blur"
    }
  ],
  timeCompensate: [
    {
      required: true, message: "请输入时间补偿", trigger: "blur"
    }
  ],
  timeFormat: [
    {
      required: true, message: "请选择时间格式", trigger: "blur"
    }
  ]
}

// 配置目标端信息
export const targetInfoRule = {
  targetType: [
    {
      required: true, message: "请选择数据目标类型", trigger: "blur"
    }
  ],
  targetId: [
    {
      required: true, message: "请选择数据目标字段", trigger: "blur"
    }
  ],
  mapConfig: [
    {
      required: true,
    }
  ]
}


import { isValidCron } from 'cron-validator';
let handleCronRule = (rule, value) => {
  if (isValidCron(value)) {
    console.log("校验通过");
  } else {
    console.log("校验不通过");
  }
};

// Cron表达式校验规则
export const cronRules = {
  second: [
    {
      required: true, message: "请输入", trigger: "blur",
    },
    {
      validator: handleCronRule, message: "格式不正确", trigger: "blur"
    }
  ],
  minute: [
    {
      required: true, message: "请输入", trigger: "blur",
    },
    {
      validator: handleCronRule, message: "格式不正确", trigger: "blur"
    }
  ],
  hour: [
    {
      required: true, message: "请输入", trigger: "blur",
    },
    {
      validator: handleCronRule, message: "格式不正确", trigger: "blur"
    }
  ],
  day: [
    {
      required: true, message: "请输入", trigger: "blur",
    },
    {
      validator: handleCronRule, message: "格式不正确", trigger: "blur"
    }
  ],
  month: [
    {
      required: true, message: "请输入", trigger: "blur",
    },
    {
      validator: handleCronRule, message: "格式不正确", trigger: "blur"
    }
  ],
  week: [
    {
      required: true, message: "请输入", trigger: "blur",
    },
    {
      validator: handleCronRule, message: "格式不正确", trigger: "blur"
    }
  ]
}
