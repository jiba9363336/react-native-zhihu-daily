import { LATEST, THEMELIST, MAIN } from '../types';

const init_state = {
    id: -1,             // theme id, -1 为首页
    title: '首页',
    latest: {
        data: [],
        hot: [],
    },
    theme: {
        data: [],
        source: null,
    },

    // 加载
    refresh: false,
    render: true,
};

export default (state = init_state, action) => {
    switch (action.type) {

        case MAIN.title: return {
            ...state,
            title: action.title,
            render: false,
        }

        case LATEST.init_in: return {
            ...state,
            refresh: true,
        }

        case LATEST.init_success: return {
            ...state,
            latest: {
                data: [{ data: action.data.stories, title: action.data.date }],
                hot: action.data.top_stories,
            },
            refresh: false,
            render: true,
            id: action.id,
        }

        case THEMELIST.init_in: return {
            ...state,
            refresh: true,
        }

        case THEMELIST.init_success: return {
            ...state,
            refresh: false,
            theme: {
                data: action.data,
                source: action.source,
            },
            id: action.id,
        }

        default: return state;
    }
}
