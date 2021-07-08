import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { postUserCreate } from "../actions/userAction";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import swal from 'sweetalert';

const mapStateToProps = (state) => {
    return {
        getResponDataUser: state.users.getResponDataUser,
        errorResponDataUser: state.users.errorResponDataUser,
    };
};

class CreateUserContainer extends Component {

    handleSubmit(data) {
        this.props.dispatch(postUserCreate(data))
    }

    render() {
        if (this.props.getResponDataUser || this.props.errorResponDataUser) {
            if (this.props.errorResponDataUser) {
                swal(
                    "User Failed Created!",
                    this.props.errorResponDataUser,
                    "error"
                );
            } else {
                swal(
                    "User Created!",
                    "Nama : " +
                    this.props.getResponDataUser.nama +
                    " , Umur : " +
                    this.props.getResponDataUser.umur,
                    "success"
                );
            }
        }
        return (
            <Container>
                <BackComponent />
                <h2>Create User</h2>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        );
    }
}

export default connect(mapStateToProps, null)(CreateUserContainer)
