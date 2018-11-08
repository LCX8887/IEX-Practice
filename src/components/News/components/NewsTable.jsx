import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';

const NewsTable = ({ newsDetail }) => {
    return (
        <div>
            {newsDetail.map(item => <p>{item}</p>)}
        </div>
    );
}

export default NewsTable;