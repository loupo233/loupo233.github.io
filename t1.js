import { callApi } from "./apiCaller.js";

async function main() {
  try {
    // 调用 API 并将结果存储到变量
    const userData = await callApi("users", "GET");
    console.log("用户数据:", userData);

    const MOD_NAME = "Test";
    const MOD_FULL_NAME = "Loupo_test";
    const MOD_VERSION = "0.0.01";


    const mod = bcModSdk.registerMod({
        name: MOD_NAME,
        fullName: MOD_FULL_NAME,
        version: MOD_VERSION
    });
    // 定义一个变量用于进一步操作
    const firstUser = userData[0];
    console.log("第一个用户:", firstUser);

    // 如果需要发送数据
    const newUser = { name: "张三", email: "zhangsan@example.com" };
    const createdUser = await callApi("users", "POST", newUser);
    console.log("新创建的用户:", createdUser);
  } catch (error) {
    console.error("发生错误:", error);
  }
}

// 执行主函数
main();