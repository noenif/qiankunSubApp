import axios from "@/config/http";

export const dataAdmin = {
    // 新增数据源
    async addDataSource(params) {
        return await axios.post("/datasource", params);
    },
    // 数据源查询（带有模糊查询功能）
    async queryDataSource(params) {
        return await axios.get("/datasource", { params });
    },
    // 删除单条数据源
    async deleteDataSource(id) {
        return await axios.delete(`/datasource/${id}`);
    },
    // 查询单条数据源
    async querySingleDataSource(id) {
        return await axios.get(`/datasource/${id}`);
    },
    // 编辑数据源
    async editDataSource(params) {
        return await axios.put("/datasource", params);
    },
    // 测试链接
    async textConnect(address) {
        return await axios.post("/datasource/testConnect", address);
    },

    // 根据数据源id得到请求方式和url
    async getRequestMandUrl(id) {
        return await axios.get(`/datasource/typeAndUrl/${id}`);
    },
}