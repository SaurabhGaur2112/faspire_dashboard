import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { TableHead, TableRow, TableCell, TableSortLabel, Paper } from '@material-ui/core';
import { designerHeader } from '../../../store/tableStore';

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
    counter += 1;
    return { id: counter, name, calories, fat, carbs, protein };
}

class EnhancedTableHead extends Component{
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    render(){
        const { order, orderBy, rowCount } = this.props;

        return(
        <TableHead>
            <TableRow>
                {designerHeader.map(column => {
                    return(
                        <TableCell
                            key={column.id}
                            numeric={column.numeric}
                            sortDirection={orderBy === column.id ? order : false}
                        >
                            <Tooltip
                                title="Sort"
                                placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                                enterDelay={300}
                            >
                                <TableSortLabel
                                    active={orderBy === column.id}
                                    direction={order}
                                    onClick={this.createSortHandler(column.id)}
                                >
                                    {column.label}
                                </TableSortLabel>
                            </Tooltip>
                        </TableCell>
                    );
                }, this)}
                <TableCell>
                    Action
                </TableCell>
            </TableRow>
        </TableHead>
        );
    }
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 1020,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class ListDesigners extends Component{
    constructor(props){
        super(props);

        this.state = {
            order: 'asc',
            orderBy: 'serial',
            data: [
                createData('Cupcake', 305),
                createData('Donut', 452),
                createData('Eclair', 262),
                createData('Frozen yoghurt', 159),
                createData('Gingerbread', 356),
                createData('Honeycomb', 408),
                createData('Ice cream sandwich', 237),
                createData('Jelly Bean', 375),
                createData('KitKat', 518),
                createData('Lollipop', 392),
                createData('Marshmallow', 318),
                createData('Nougat', 360),
                createData('Oreo', 437),
            ],
            page: 0,
            rowsPerPage: 5,
        };
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if(this.state.orderBy === property && this.state.order === 'desc'){
            order = 'asc';
        }

        const data = 
            order === 'desc'
            ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
            : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

        this.setState({data, order, orderBy});
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };
    
    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    render(){

        const { classes } = this.props;
        const { data, order, orderBy, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return(
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-labelledby="tableTitle">
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={this.handleRequestSort}
                            rowCount={data.length}
                        />
                        <TableBody>
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                                return(
                                    <TableRow
                                        hover
                                        tabIndex={-1}
                                        key={n.id}
                                    >
                                        <TableCell>
                                            {n.id}
                                        </TableCell>
                                        <TableCell>
                                            {n.name}
                                        </TableCell>
                                        <TableCell>{n.calories}</TableCell>
                                        <TableCell>{n.fat}</TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <i class="material-icons eye_icons">
                                                    remove_red_eye
                                                </i>
                                            </IconButton>
                                            <IconButton>
                                                <Icon>edit_icon</Icon>
                                            </IconButton>
                                            <IconButton><DeleteIcon/></IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 49 * emptyRows }}>
                                <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        );
    }
}

export default withStyles(styles)(ListDesigners);