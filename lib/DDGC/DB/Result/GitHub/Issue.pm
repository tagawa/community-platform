package DDGC::DB::Result::GitHub::Issue;
# ABSTRACT:

use Moose;
use MooseX::NonMoose;
extends 'DDGC::DB::Base::Result';
use DBIx::Class::Candy;
use namespace::autoclean;

table 'github_issue';

primary_column id       => {data_type => 'bigint', is_auto_increment => 1};
unique_column github_id => {data_type => 'bigint', is_nullable => 0};
column github_repo_id   => {data_type => 'bigint', is_nullable => 0};
column github_user_id   => {data_type => 'bigint', is_nullable => 0};
column idea_id          => {data_type => 'bigint', is_nullable => 1};
unique_column number    => {data_type => 'int',    is_nullable => 0};
column comments         => {data_type => 'int',    is_nullable => 0};
column title            => {data_type => 'text',   is_nullable => 0};
column body             => {data_type => 'text',   is_nullable => 0};
column state            => {data_type => 'text',   is_nullable => 0};
column github_user_id_assignee => {data_type => 'bigint', is_nullable => 1};
column created_at       => {data_type => 'timestamp without time zone', is_nullable => 0};
column updated_at       => {data_type => 'timestamp without time zone', is_nullable => 1};
column closed_at        => {data_type => 'timestamp without time zone', is_nullable => 1};
column created          => {data_type => 'timestamp with time zone', set_on_create  => 1};
column updated          => {data_type => 'timestamp with time zone', set_on_create  => 1, set_on_update => 1};
column gh_data          => {
  data_type        => 'text',
  is_nullable      => 0,
  serializer_class => 'AnyJSON',
  default_value    => '{}',
};

belongs_to github_repo => 'DDGC::DB::Result::GitHub::Repo',
    { 'foreign.id' => 'self.github_repo_id' },
    { on_delete => 'cascade' };

belongs_to github_user => 'DDGC::DB::Result::GitHub::User',
    { 'foreign.id' => 'self.github_user_id' },
    { on_delete => 'cascade' };

belongs_to github_user_assignee => 'DDGC::DB::Result::GitHub::User',
    { 'foreign.id' => 'self.github_user_id_assignee' },
    { on_delete => 'cascade', join_type => 'left' };

has_many github_issue_events => 'DDGC::DB::Result::GitHub::Issue::Event',
    { 'foreign.github_issue_id' => 'self.id' },
    { cascade_delete => 1 };

has_many github_issue_attributions => 'DDGC::DB::Result::GitHub::Issue::Attribution',
    { 'foreign.github_issue_id' => 'self.id' },
    { cascade_delete => 0 };

has_many github_comments => 'DDGC::DB::Result::GitHub::Comment',
    { 'foreign.number' => 'self.number' },
    { cascade_delete => 0 };

no Moose;
__PACKAGE__->meta->make_immutable;
