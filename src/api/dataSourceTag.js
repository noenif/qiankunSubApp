import axios from "@/config/http";

export const dataTagApi = {
    // 获得标签列表数据
    async getLabelList(params) {
        return await axios.get("/taskTag", { params });
    },
    // 新增标签
    async addTag(params) {
        return await axios.post("/taskTag", params);
    },
    // 编辑标签
    async editTag(params) {
        return await axios.put("/taskTag", params);
    },
    // 删除标签
    async deleteTag(id) {
        return await axios.delete(`/taskTag/${id}`);
    },
    // 删除引用标签
    async deleteQuoteTag(id) {
        return await axios.delete(`/taskTag/tag/${id}`)
    },
    // 查询标签详情
    async getTagDetail(id) {
        return await axios.get(`/taskTag/${id}`);
    },
    // 通过标签名模糊查询标签列表，不传后端会返回前十条标签数据，传的话会模糊匹配返回十条数据
    async getQueryLabelList(queryName) {
        return await axios.get("/label/query", { queryName })
    },
}