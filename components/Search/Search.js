import react, {Component} from 'react';
import "./Search.less";
import { withRouter } from 'next/router';
import Link from 'next/link'

function SearchButton(props) {
  return (
    <button>
      <Link as={`/results/${props.term}`} href={`/results?search=${props.term}`}>
      <a>
       {props.children}
      </a>
      </Link>
    </button>
  )
}


class Search extends Component{

state={
    term:''
}

inputChangeHandler=(e)=>{
    console.log(e.target.value);
    this.setState({term:e.target.value});
}

    render(){
        return(
            <div class="search-wrapper">
                <div className="title">find your movie</div>
                <input type="text" ref="term" onChange={this.inputChangeHandler}/>
                <SearchButton className="submit-btn" term={this.state.term}>search</SearchButton>
            </div>
        )
    }
}

export default withRouter(Search);


