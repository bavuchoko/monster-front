import axios from "axios";

class ApiService {

    fetchContents() {
        return axios.get('/api');
    }

    fetchContentById(id) {
        return axios.get('/api/' + id);
    }

    deleteContent(id) {
        return axios.delete('/api/' + id);
    }

    createContent(content) {
        return axios.post('/api/', content);
    }

    updateContent(content) {
        return axios.put('/api/' + content.id, content);
    }

}

export default new ApiService();