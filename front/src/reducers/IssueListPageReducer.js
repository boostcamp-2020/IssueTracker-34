const IssueListPageReducer = {
  issueListReducer(issueList, { type, payload }) {
    switch (type) {
      case 'setInitial':
        return payload
          .map((issue) => {
            return { ...issue, isChecked: false };
          })
          .sort((a, b) => (a.id > b.id ? -1 : 1));
      case 'checkAll':
        return issueList.map((issue) => {
          return { ...issue, isChecked: payload.isChecked };
        });
      case 'check':
        return issueList.map((issue) => {
          return issue.id === payload.id
            ? { ...issue, isChecked: !issue.isChecked }
            : issue;
        });
      case 'setStatusOpenClosed':
        return issueList.map((issue) => {
          return issue.id === payload.id
            ? {
                ...issue,
                isChecked: payload.isChecked,
                status_open_closed: payload.statusOpenClosed,
              }
            : issue;
        });
    }
  },
  authorListReducer(authorList, { type, payload }) {
    switch (type) {
      case 'setInitial':
        return payload
          .map((author) => {
            return { ...author, isChecked: false };
          })
          .sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'check':
        const [checkedAuthor] = authorList.filter((author) => author.isChecked);
        if (checkedAuthor !== undefined && checkedAuthor.id === payload.id)
          return authorList.map((author) => {
            return { ...author, isChecked: false };
          });
        return authorList
          .map((author) => {
            return {
              ...author,
              isChecked: author.id === payload.id ? true : false,
            };
          })
          .sort((a, b) => {
            if (a.isChecked) return -1;
            if (b.isChecked) return 1;
            return a.name > b.name ? 1 : -1;
          });
    }
  },
};

export default IssueListPageReducer;
