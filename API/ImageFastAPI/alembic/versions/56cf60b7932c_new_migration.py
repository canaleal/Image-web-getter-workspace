"""New Migration

Revision ID: 56cf60b7932c
Revises: 
Create Date: 2022-07-05 02:51:30.892966

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '56cf60b7932c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('popularity')
    op.drop_table('topic')
    op.drop_index('fki_images_topic_fkey', table_name='reddit_images')
    op.drop_table('reddit_images')
    op.drop_table('users')
    op.drop_table('gel_general_images')
    op.alter_column('rule_general_images', 'id',
               existing_type=sa.INTEGER(),
               server_default=None,
               existing_nullable=False,
               autoincrement=True)
    op.create_unique_constraint(None, 'rule_general_images', ['container_link'])
    op.create_unique_constraint(None, 'rule_general_images', ['name'])
    op.create_unique_constraint(None, 'rule_general_images', ['image_link'])
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'rule_general_images', type_='unique')
    op.drop_constraint(None, 'rule_general_images', type_='unique')
    op.drop_constraint(None, 'rule_general_images', type_='unique')
    op.alter_column('rule_general_images', 'id',
               existing_type=sa.INTEGER(),
               server_default=sa.Identity(always=True, start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1),
               existing_nullable=False,
               autoincrement=True)
    op.create_table('gel_general_images',
    sa.Column('id', sa.INTEGER(), sa.Identity(always=True, start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), autoincrement=True, nullable=False),
    sa.Column('container_link', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('image_link', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('created_at', postgresql.TIME(timezone=True), server_default=sa.text('now()'), autoincrement=False, nullable=False),
    sa.Column('name', sa.TEXT(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='general_images_pkey')
    )
    op.create_table('users',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('name', sa.TEXT(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='users_pkey')
    )
    op.create_table('reddit_images',
    sa.Column('id', sa.INTEGER(), sa.Identity(always=True, start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), autoincrement=True, nullable=False),
    sa.Column('name', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('post_link', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('post_popularity', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('created_at', postgresql.TIME(timezone=True), server_default=sa.text('now()'), autoincrement=False, nullable=False),
    sa.Column('topic', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('post_title', sa.TEXT(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['post_popularity'], ['popularity.id'], name='images_post_popularity_fkey'),
    sa.ForeignKeyConstraint(['topic'], ['topic.id'], name='images_topic_fkey'),
    sa.PrimaryKeyConstraint('id', name='images_pkey')
    )
    op.create_index('fki_images_topic_fkey', 'reddit_images', ['topic'], unique=False)
    op.create_table('topic',
    sa.Column('id', sa.INTEGER(), sa.Identity(always=True, start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), autoincrement=True, nullable=False),
    sa.Column('name', sa.TEXT(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='topic_pkey')
    )
    op.create_table('popularity',
    sa.Column('id', sa.INTEGER(), sa.Identity(always=True, start=1, increment=1, minvalue=1, maxvalue=2147483647, cycle=False, cache=1), autoincrement=True, nullable=False),
    sa.Column('name', sa.TEXT(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='popularity_pkey')
    )
    # ### end Alembic commands ###
