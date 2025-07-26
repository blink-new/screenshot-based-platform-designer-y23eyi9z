import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Users, Shield, FileText, Palette } from 'lucide-react'

const UtilitiesModule = () => {
  return (
    <div className="p-6">
      <Tabs defaultValue="partnership" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="partnership">Partnership</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="data-conversion">Data Conversion</TabsTrigger>
          <TabsTrigger value="designs">Designs</TabsTrigger>
        </TabsList>

        <TabsContent value="partnership" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Partnership Management</CardTitle>
              <CardDescription>Track channel partner performance and payouts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">Partner Dashboard</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Manage partners and track performance metrics
                </p>
                <Button>
                  <Users className="mr-2 h-4 w-4" />
                  Manage Partners
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Permission & Access Control</CardTitle>
              <CardDescription>Define RBAC-based access controls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Shield className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">Access Control</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Assign module and data-level access to users
                </p>
                <Button>
                  <Shield className="mr-2 h-4 w-4" />
                  Manage Permissions
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data-conversion" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Conversions</CardTitle>
              <CardDescription>Upload and convert data formats</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">Data Converter</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Convert CSV to JSON/XML and other formats
                </p>
                <Button>
                  <FileText className="mr-2 h-4 w-4" />
                  Convert Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="designs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Design Assets</CardTitle>
              <CardDescription>Store templates, logos, and UI configurations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Palette className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">Design Library</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Manage templates, logos, and email designs
                </p>
                <Button>
                  <Palette className="mr-2 h-4 w-4" />
                  Manage Designs
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default UtilitiesModule