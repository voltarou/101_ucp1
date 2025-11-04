'use_strict';

module.exports = (sequelize, DataTypes) => {
    const kandang = sequelize.define('kandang', {
        idkandang: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nama_Hewan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Nama_Petugas: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Usia_Hewan: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Jenis_kelamin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Tahun_Lahir: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'kandang',
        timestamps: false
    });

    return kandang;
};