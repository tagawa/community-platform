package DDGC::DB::ResultSet::ReleaseVersion;
# ABSTRACT: Resultset class for tracking release versions 

use Moose;
extends 'DDGC::DB::Base::ResultSet';
use namespace::autoclean;
use DateTime;
use DateTime::Format::Pg;

sub last_modified {
    my ( $self ) = @_;
    my $last_modified = $self->get_column('updated')->max;
    return DateTime::Format::Pg->parse_datetime(
        $last_modified
    )->truncate( to => 'second' ) if $last_modified;

    return DateTime->new( year => 1970 );
}

1;
