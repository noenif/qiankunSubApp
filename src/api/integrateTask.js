import axios from "@/config/http";

export const integrateApi = {
    // 根据类型查询数据
    async getTypeDataSource(params) {
        return await axios.get("/task/metadata", { params });
    },
    // 通过元数据Id查询到属性数据
    async getMetadataProperty(id) {
        return await axios.get(`/task/metadataProperty/${id}`);
    },
    // 新增集成任务
    async addIntegrateTask(params) {
        return await axios.post("/task", params);
    },
    // 获取集成任务数据
    async getIntegrateTask(params) {
        return await axios.get("/task", { params });
    },
    // 获取单条集成任务详情
    async getIntegrateTaskId(id) {
        return await axios.get(`/task/${id}`);
    },
    // 检测集成任务名称是否存在
    async checkIntegrateName(name) {
        return await axios.get(`/task/check/${name}`);
    },
    // 集成任务详情显示日志
    async getDetailJournal(params) {
        return await axios.get(`/task/log/`, { params });
    },

    // 按钮功能所需接口
    // 编辑任务
    async editIntegrateTask(params) {
        return await axios.put("/task", params);
    },
    // 开启任务
    async startTask(id) {
        return await axios.get(`/task/start/${id}`);
    },
    // 停止任务
    async stopTask(id) {
        return await axios.get(`/task/stop/${id}`);
    },
    // 手工调度
    async handDispatch(id) {
        return await axios.get(`/task/dispatch/${id}`);
    },
    // 删除任务
    async deleteTask(id) {
        return await axios.delete(`/task?id=${id}`);
    },
}