'use_strict';

module.exports = (sequelize, DataTypes) => {
    const kandang = sequelize.define('kandang', {
        idkandang: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_hewan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nama_petugas: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usia_Hewan: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        jenis_kelamin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tahun_lahir: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'kandang',
        timestamps: false
    });

    return kandang;
};