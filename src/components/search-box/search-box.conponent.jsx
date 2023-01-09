import './search-box.styles.css'

const SearchBox = ({className, onChangeHandler, placeholder}) => {
    return (
        <input
            className={className}
            type='search'
            onChange={onChangeHandler}
            placeholder={placeholder}
        />
    )
}



//class version of component:

// class SearchBox extends Component {

//     render(){
//         return (
//             <input
//                 className={this.props.className}
//                 type='search'
//                 onChange={this.props.onChangeHandler}
//                 placeholder={this.props.placeholder}
//             />
//         )
//     }
// }

export default SearchBox;
