import React, {Component} from "react";
import ApiService from "../../../apis/ApiService";

class UpdateJavaComponent extends Component{


    constructor(props) {
        super(props);

        this.state = {
            writer: '',
            title: '',
            body: '',
            message: null
        }
    }
    componentDidMount() {
        this.loadContent();
    }

    loadContent = () => {
        ApiService.fetchContentById(window.localStorage.getItem("id"))
            .then(res => {
                let content = res.data;
                this.setState({
                    writer: content.writer,
                    title: content.title,
                    body: content.body
                })
            })
            .catch(err => {
                console.log('loadContent() Error!'. err);
            });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updateContent = (e) =>{
        e.preventDefault();

        let content = {
            writer: this.state.writer,
            title: this.state.title,
            body: this.state.body
        }
        ApiService.updateContent(content)
            .then(res => {
                this.setState({
                    message: '수정되었습니다.'
                })
                this.props.history.push('/contents');
            })
            .catch(err => {
                console.log('updateContent() Error!', err);
            })
    }

    render() {
        return(
            <div>
                <h2>수정</h2>
                <form>
                    <div>
                        <label>작성자 :</label>
                        <input type='text' readOnly='true' name='writer' defaultValue={this.state.writer}/>
                    </div>
                    <div>
                        <label>제목 :</label>
                        <input type='text' placeholder='제목 수정' name='title' value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>본문 :</label>
                        <input type='text' placeholder='내용 입력' name='body' value={this.state.body} onChange={this.onChange}/>
                    </div>

                    <button onClick={this.saveContent}>저장</button>
                </form>
            </div>
        )
    }


}


export default UpdateJavaComponent;