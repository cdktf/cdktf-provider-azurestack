# `dataAzurestackVirtualNetworkGatewayConnection` Submodule <a name="`dataAzurestackVirtualNetworkGatewayConnection` Submodule" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackVirtualNetworkGatewayConnection <a name="DataAzurestackVirtualNetworkGatewayConnection" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection azurestack_virtual_network_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway_connection.DataAzurestackVirtualNetworkGatewayConnection;

DataAzurestackVirtualNetworkGatewayConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurestackVirtualNetworkGatewayConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#name DataAzurestackVirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#resource_group_name DataAzurestackVirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#id DataAzurestackVirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#name DataAzurestackVirtualNetworkGatewayConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#resource_group_name DataAzurestackVirtualNetworkGatewayConnection#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#id DataAzurestackVirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#timeouts DataAzurestackVirtualNetworkGatewayConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.putTimeouts"></a>

```java
public void putTimeouts(DataAzurestackVirtualNetworkGatewayConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway_connection.DataAzurestackVirtualNetworkGatewayConnection;

DataAzurestackVirtualNetworkGatewayConnection.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway_connection.DataAzurestackVirtualNetworkGatewayConnection;

DataAzurestackVirtualNetworkGatewayConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway_connection.DataAzurestackVirtualNetworkGatewayConnection;

DataAzurestackVirtualNetworkGatewayConnection.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.authorizationKey">authorizationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.egressBytesTransferred">egressBytesTransferred</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.enableBgp">enableBgp</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.expressRouteCircuitId">expressRouteCircuitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.ingressBytesTransferred">ingressBytesTransferred</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.ipsecPolicy">ipsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList">DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.localNetworkGatewayId">localNetworkGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId">peerVirtualNetworkGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGuid">resourceGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.routingWeight">routingWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.sharedKey">sharedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference">DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors">usePolicyBasedTrafficSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.virtualNetworkGatewayId">virtualNetworkGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `authorizationKey`<sup>Required</sup> <a name="authorizationKey" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.authorizationKey"></a>

```java
public java.lang.String getAuthorizationKey();
```

- *Type:* java.lang.String

---

##### `egressBytesTransferred`<sup>Required</sup> <a name="egressBytesTransferred" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.egressBytesTransferred"></a>

```java
public java.lang.Number getEgressBytesTransferred();
```

- *Type:* java.lang.Number

---

##### `enableBgp`<sup>Required</sup> <a name="enableBgp" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.enableBgp"></a>

```java
public IResolvable getEnableBgp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `expressRouteCircuitId`<sup>Required</sup> <a name="expressRouteCircuitId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.expressRouteCircuitId"></a>

```java
public java.lang.String getExpressRouteCircuitId();
```

- *Type:* java.lang.String

---

##### `ingressBytesTransferred`<sup>Required</sup> <a name="ingressBytesTransferred" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.ingressBytesTransferred"></a>

```java
public java.lang.Number getIngressBytesTransferred();
```

- *Type:* java.lang.Number

---

##### `ipsecPolicy`<sup>Required</sup> <a name="ipsecPolicy" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.ipsecPolicy"></a>

```java
public DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList getIpsecPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList">DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList</a>

---

##### `localNetworkGatewayId`<sup>Required</sup> <a name="localNetworkGatewayId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.localNetworkGatewayId"></a>

```java
public java.lang.String getLocalNetworkGatewayId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `peerVirtualNetworkGatewayId`<sup>Required</sup> <a name="peerVirtualNetworkGatewayId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId"></a>

```java
public java.lang.String getPeerVirtualNetworkGatewayId();
```

- *Type:* java.lang.String

---

##### `resourceGuid`<sup>Required</sup> <a name="resourceGuid" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGuid"></a>

```java
public java.lang.String getResourceGuid();
```

- *Type:* java.lang.String

---

##### `routingWeight`<sup>Required</sup> <a name="routingWeight" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.routingWeight"></a>

```java
public java.lang.Number getRoutingWeight();
```

- *Type:* java.lang.Number

---

##### `sharedKey`<sup>Required</sup> <a name="sharedKey" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.sharedKey"></a>

```java
public java.lang.String getSharedKey();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.timeouts"></a>

```java
public DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference">DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usePolicyBasedTrafficSelectors`<sup>Required</sup> <a name="usePolicyBasedTrafficSelectors" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors"></a>

```java
public IResolvable getUsePolicyBasedTrafficSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `virtualNetworkGatewayId`<sup>Required</sup> <a name="virtualNetworkGatewayId" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.virtualNetworkGatewayId"></a>

```java
public java.lang.String getVirtualNetworkGatewayId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackVirtualNetworkGatewayConnectionConfig <a name="DataAzurestackVirtualNetworkGatewayConnectionConfig" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway_connection.DataAzurestackVirtualNetworkGatewayConnectionConfig;

DataAzurestackVirtualNetworkGatewayConnectionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurestackVirtualNetworkGatewayConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#name DataAzurestackVirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#resource_group_name DataAzurestackVirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#id DataAzurestackVirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#name DataAzurestackVirtualNetworkGatewayConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#resource_group_name DataAzurestackVirtualNetworkGatewayConnection#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#id DataAzurestackVirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionConfig.property.timeouts"></a>

```java
public DataAzurestackVirtualNetworkGatewayConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#timeouts DataAzurestackVirtualNetworkGatewayConnection#timeouts}

---

### DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy <a name="DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway_connection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy;

DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy.builder()
    .build();
```


### DataAzurestackVirtualNetworkGatewayConnectionTimeouts <a name="DataAzurestackVirtualNetworkGatewayConnectionTimeouts" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway_connection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts;

DataAzurestackVirtualNetworkGatewayConnectionTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#read DataAzurestackVirtualNetworkGatewayConnection#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/virtual_network_gateway_connection#read DataAzurestackVirtualNetworkGatewayConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList <a name="DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway_connection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList;

new DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.get"></a>

```java
public DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference <a name="DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway_connection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference;

new DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup">dhGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption">ikeEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity">ikeIntegrity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption">ipsecEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity">ipsecIntegrity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup">pfsGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize">saDatasize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime">saLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy">DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup"></a>

```java
public java.lang.String getDhGroup();
```

- *Type:* java.lang.String

---

##### `ikeEncryption`<sup>Required</sup> <a name="ikeEncryption" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption"></a>

```java
public java.lang.String getIkeEncryption();
```

- *Type:* java.lang.String

---

##### `ikeIntegrity`<sup>Required</sup> <a name="ikeIntegrity" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```java
public java.lang.String getIkeIntegrity();
```

- *Type:* java.lang.String

---

##### `ipsecEncryption`<sup>Required</sup> <a name="ipsecEncryption" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```java
public java.lang.String getIpsecEncryption();
```

- *Type:* java.lang.String

---

##### `ipsecIntegrity`<sup>Required</sup> <a name="ipsecIntegrity" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```java
public java.lang.String getIpsecIntegrity();
```

- *Type:* java.lang.String

---

##### `pfsGroup`<sup>Required</sup> <a name="pfsGroup" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup"></a>

```java
public java.lang.String getPfsGroup();
```

- *Type:* java.lang.String

---

##### `saDatasize`<sup>Required</sup> <a name="saDatasize" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize"></a>

```java
public java.lang.Number getSaDatasize();
```

- *Type:* java.lang.Number

---

##### `saLifetime`<sup>Required</sup> <a name="saLifetime" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime"></a>

```java
public java.lang.Number getSaLifetime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue"></a>

```java
public DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy">DataAzurestackVirtualNetworkGatewayConnectionIpsecPolicy</a>

---


### DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference <a name="DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_virtual_network_gateway_connection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference;

new DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackVirtualNetworkGatewayConnection.DataAzurestackVirtualNetworkGatewayConnectionTimeouts">DataAzurestackVirtualNetworkGatewayConnectionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



