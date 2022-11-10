import React from 'react'

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
            
        }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(e){
        this.setState( {query: e.target.value})
        }
        
    handleSubmit(e){
        e.preventDefault()
        this.props.searchFunction(this.state.query)
    }

    render() {
        return (
            <div className='headerComponent'>
                <a href="https://news.ycombinator.com">H</a>
                <h1>Search Hacker News</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Search stories by title, url or author" />
                    <input type="submit" value="Submit" />
                </form>
                <h2><img src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" width={"20px"} alt="H"/>Settings</h2>
            </div>
        )
    }
}

export default HeaderComponent