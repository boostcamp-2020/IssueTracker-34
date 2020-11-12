import axios from 'axios';
import Swal from 'sweetalert2';

const API_URL = process.env.API_URL;

const commentAPI = {
  async createComment(userId, issueId, commentText) {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        API_URL + '/comment',
        {
          userId: userId,
          issueId: issueId,
          comment: commentText,
          date: Date.now(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Comment create failed..',
        text: 'Something went wrong!',
      });
      return [];
    }
  },
  //data id 때문에 필요해서 추가로 적음.
  async getAllComments() {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(API_URL + '/comment', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Comments get failed..',
        text: 'Something went wrong!',
      });
      return [];
    }
  },

  async getComments(issueId) {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(
        API_URL + '/comment',
        {
          params: { issueId: issueId },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Comment get failed..',
        text: 'Something went wrong!',
      });
      return [];
    }
  },

  async editComment(commentId, comment) {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(
        API_URL + '/comment',
        {
          commentId: commentId,
          comment: comment,
          date: Date.now(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Comment edit failed..',
        text: 'Something went wrong!',
      });
      return [];
    }
  },
};

export default commentAPI;
