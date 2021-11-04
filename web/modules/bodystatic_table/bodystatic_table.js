import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../components/image'
import RichText from '../../components/richText_field/richText_field'
import styles from './bodystatic-table.module.scss'

const bodystatic_table = (props) => {
    const {columns, rows} = props;

    return(
        <div className="bodystatic-table">
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((column) => {
                            if(column.empty_head ){
                                return <th key={column._key}></th>
                            }else{
                                return ( 
                                    <th key={column._key}>
                                        {column.icon ?
                                            <div className={`${styles.row_cell_list} ${styles.row_cell_list__large}`}>
                                                <Image src={column.icon} layout="responsive" objectFit="contain" />
                                                <h4>{column.header}</h4>
                                                {col.subheader &&
                                                    <h5>{column.subheader}</h5>
                                                }
                                            </div>
                                            :
                                            <>
                                            <h4>{column.header}</h4>
                                            {column.subheader &&
                                                <h5>{column.subheader}</h5>
                                            }
                                            </>
                                        }
                                    </th>
                                )
                            }
                        })}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => {
                        return  (
                            <tr className={styles.row} key={row._key}>
                                <td>
                                    <h5>{row.header}</h5>
                                </td>
                                {row.cells.map((cell) => {
                                    return  (
                                        <td key={cell._key}>
                                            {cell.bullets ?
                                                cell.bullets.map((bullet) => {
                                                    return  (
                                                        <div className={styles.row_cell_list} key={bullet._key}>
                                                            <Image src={bullet.icon} layout="fixed" width={28} height={28} />
                                                            <RichText className={styles.row_cell_list_content} richText={bullet.body.richText} align={bullet.body.align} />
                                                        </div>
                                                    )
                                                })
                                                :
                                                <RichText richText={cell.body.richText} align={cell.body.align} />
                                            }
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

bodystatic_table.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string,
        subheader: PropTypes.string,
        icon: PropTypes.object,
        empty_head: PropTypes.bool
    })),
    rows: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string,
        cells: PropTypes.arrayOf(PropTypes.shape({
            body: PropTypes.object,
            bullets: PropTypes.array
        }))
    })),
}

export default bodystatic_table;