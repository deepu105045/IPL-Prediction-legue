import { MenuItem } from '../framework/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
        {
        text: 'Add Team',
        icon: 'glyphicon-dashboard',
        route: '/add-team',
        subMenu: null
    },
    {
        text: 'Schedule Game',
        icon: 'glyphicon-dashboard',
        route: '/game-scheduler',
        subMenu: null
    },
    {
        text: 'Predict It',
        icon: 'glyphicon-dashboard',
        route: '/predict-it',
        subMenu: null
    },
    {
        text: 'Point Table',
        icon: 'glyphicon-dashboard',
        route: '/point-table',
        subMenu: null
    },
       {
        text: 'Rules',
        icon: 'glyphicon-dashboard',
        route: '/prediction-rules',
        subMenu: null
    },
           {
        text: 'Update Results',
        icon: 'glyphicon-dashboard',
        route: '/update-results',
        subMenu: null
    }
];
